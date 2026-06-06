# Markdown Note CLI

Công cụ dòng lệnh Node.js để quản lý ghi chú Markdown. Ghi chú được lưu dưới dạng file `.md` trong thư mục `~/notes/`.

## Cài đặt

```bash
# Clone repo
git clone https://github.com/Dhung1110/markdown-note-cli.git
cd markdown-note-cli

# Install dependencies
npm install

# Link để dùng global
npm link
```

Sau khi link, bạn có thể dùng lệnh `note` từ bất kỳ đâu.

## Lệnh

### `note add <title> <content>`

Tạo ghi chú mới. File `.md` được lưu trong `~/notes/` với tên `{timestamp}-{slug}.md`.

```bash
$ note add "Học Node.js" "Hôm nay học về commander và chalk"
✅ Note created: 1717641600000-hoc-node-js.md
   /root/notes/1717641600000-hoc-node-js.md
```

File được tạo có nội dung:

```markdown
# Học Node.js

*Created: 2026-06-06 02:40:00*

Hôm nay học về commander và chalk
```

### `note list`

Hiển thị danh sách tất cả ghi chú với ID, tiêu đề và ngày tạo.

```bash
$ note list
📝 Notes (2):

  1. Học Node.js (2026-06-06 02:40:00)
  2. Mua groceries (2026-06-06 03:15:00)
```

### `note view <id>`

Xem nội dung đầy đủ của một ghi chú theo ID.

```bash
$ note view 1

📄 Học Node.js

# Học Node.js

*Created: 2026-06-06 02:40:00*

Hôm nay học về commander và chalk
```

### `note delete <id>`

Xóa ghi chú theo ID.

```bash
$ note delete 1
🗑️  Deleted: Học Node.js
```

## Tech Stack

- [Commander.js](https://github.com/tj/commander.js) — CLI framework
- [Chalk](https://github.com/chalk/chalk) — Terminal colors

## License

ISC
