"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ url: url, shorturl: shorturl });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        alert(result.message);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="mx-auto max-w-lg w-full p-4 rounded-lg bg-blue-100 pt-20">
      <h1 className="my-5 text-2xl sm:text-3xl font-extrabold font-serif text-center underline text-blue-900">
        One Stop Solution for Short URLs
      </h1>
      <div className="flex flex-col space-y-3 p-3">
        <input
          type="text"
          className="w-full focus:outline-blue-300 font-serif p-2 rounded border border-gray-300"
          placeholder="ENTER YOUR URL"
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full focus:outline-blue-300 font-serif p-2 rounded border border-gray-300"
          placeholder="ENTER THE SHORT URL TEXT YOU WANT"
          value={shorturl}
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          disabled={loading}
          className={`w-full text-white font-serif p-2 rounded-2xl ${loading ? "bg-gray-600" : "bg-blue-800 hover:bg-blue-900"}`}
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </div>
      {generated && (
        <div className="mt-4 flex flex-col items-center space-y-2">
          <span className="font-extrabold text-lg">Your Link:</span>
          <code className="bg-gray-100 p-2 rounded">
            <Link
              target="_blank"
              href={generated}
              className="text-blue-600 hover:underline break-all"
            >
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
};

export default Shorten;
