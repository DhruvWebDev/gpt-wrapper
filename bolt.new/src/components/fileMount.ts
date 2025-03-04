"use client";
import { useEffect } from "react";

export const MountStructure = ({ webcontainer, projects }) => {
  console.log("Mounting code: --control reached here ", projects);

  console.log("control reached here ");
  
  // Directory creation (use `for...of` instead of `map`)
  for (const dir of projects.directories) {
    console.log("Creating directory:", dir);
    webcontainer?.fs?.mkdir(dir, { recursive: true });
  }

  // File mounting (use `for...of` instead of `map`)
  for (const file of projects.files) {
    console.log("Mounting file:", file);
    const { name, code } = file;
    webcontainer?.fs?.writeFile(name, code);
  }

  return true;
};
