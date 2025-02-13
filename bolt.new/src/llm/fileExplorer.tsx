"use client";

import React from "react";
import { ChevronRight, ChevronDown, File, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileTreeNode {
  name: string;
  type: "file" | "folder";
  children?: FileTreeNode[];
}

interface FileTreeProps {
  data: FileTreeNode[];
  className?: string;
}

interface FileTreeItemProps {
  node: FileTreeNode;
  level?: number;
}

const FileTreeItem: React.FC<FileTreeItemProps> = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = node.type === "folder" && node.children?.length;

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 px-2 hover:bg-secondary rounded-sm cursor-pointer text-sm",
          "transition-colors duration-75 ease-in-out"
        )}
        style={{ paddingLeft: `${level * 12}px` }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <div className="w-4 h-4 mr-1 flex items-center">
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )
          ) : null}
        </div>
        <div className="w-4 h-4 mr-2 flex items-center">
          {node.type === "folder" ? (
            <Folder className="w-4 h-4 text-blue-500" />
          ) : (
            <File className="w-4 h-4 text-gray-500" />
          )}
        </div>
        <span className="select-none">{node.name}</span>
      </div>
      {isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileTreeItem key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({ data, className }) => {
  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground", className)}>
      {data.map((node, index) => (
        <FileTreeItem key={index} node={node} />
      ))}
    </div>
  );
};