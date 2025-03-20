#!/usr/bin/env node
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Определяем пути
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatePath = path.join(__dirname, "../template");
const targetPath = process.cwd();

// Функция для копирования файлов
function copyTemplate(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  for (const file of files) {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    if (fs.statSync(srcFile).isDirectory()) {
      copyTemplate(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

// Копируем файлы шаблона
copyTemplate(templatePath, targetPath);

// Переименовываем `gitignore` в `.gitignore`
const gitignorePath = path.join(targetPath, "gitignore");
const correctGitignorePath = path.join(targetPath, ".gitignore");

if (fs.existsSync(gitignorePath)) {
  fs.renameSync(gitignorePath, correctGitignorePath);
}

console.log("✅ Шаблон установлен! Устанавливаем зависимости...");

// Устанавливаем зависимости
execSync("npm install", { stdio: "inherit" });

console.log("🚀 Проект готов! Запусти его командой:");
console.log("npm run dev");
