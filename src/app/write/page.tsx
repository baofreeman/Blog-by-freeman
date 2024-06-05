"use client";

import {
  CirclePlus,
  FileVideo,
  Image,
  SquareArrowOutUpRight,
} from "lucide-react";
import styles from "./writePage.module.css";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

type OpenType = boolean;
type ValueType = string;
const storage = getStorage(app);

const categoriesArray: string[] = ["fashion", "style", "food", "travel"];

const WritePage = () => {
  const [open, setOpen] = useState<OpenType>(false);
  const [value, setValue] = useState<ValueType>("");
  const [file, setFile] = useState<any>(null);
  const [media, setMedia] = useState<string>("");
  const [cat, setCat] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const { status } = useSession();
  const router = useRouter();
  const options = categoriesArray.map((option) => (
    <option className={styles.option} key={option}>
      {option}
    </option>
  ));
  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: cat,
      }),
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Tittle"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.selected}
        onChange={(e) => setCat(e.target.value)}
      >
        {options}
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <CirclePlus />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e: any) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image />
              </label>
            </button>
            <button className={styles.addButton}>
              <SquareArrowOutUpRight />
            </button>
            <button className={styles.addButton}>
              <FileVideo />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
      <button
        className={styles.publish}
        onClick={handleSubmit}
        disabled={!value || !cat || !title || !media}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
