export default function ItalicText(text) {
  return (
    <span style={{
      fontFamily: "'Newsreader', serif",
      fontWeight: 500,
      fontStyle: "italic"
    }}>{text.Text}</span>
  );
}