import showdown from "showdown";
import * as DOMPurify from "dompurify";

export default function ArticleContent({ desc, title, body }) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(body);
  let cleanHtml = DOMPurify.sanitize(html);
  return (
    <div className="row article-content">
      <div className="col-md-12">
        <p>{desc}</p>
        <h2 id="introducing-ionic">{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </div>
    </div>
  );
}
