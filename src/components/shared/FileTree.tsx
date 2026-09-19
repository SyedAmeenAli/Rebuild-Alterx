import "./FileTree.css";

function FolderIcon() {
  return (
    <svg className="file-tree__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg className="file-tree__icon file-tree__icon--file" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

export function FileTree() {
  return (
    <div className="file-tree">
      <ul>
        <li className="file-tree__item">
          <div className="file-tree__label">
            <FolderIcon />
            engine
          </div>
          <div className="file-tree__children-wrapper">
            <ul className="file-tree__children">
              <li className="file-tree__item">
                <div className="file-tree__file">
                  <FileIcon />
                  plan.ts
                </div>
              </li>
              <li className="file-tree__item">
                <div className="file-tree__file">
                  <FileIcon />
                  bind.ts
                </div>
              </li>
              <li className="file-tree__item">
                <div className="file-tree__file">
                  <FileIcon />
                  verify.ts
                </div>
              </li>
              <li className="file-tree__item">
                <div className="file-tree__file">
                  <FileIcon />
                  recover.ts
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="file-tree__item">
          <div className="file-tree__label">
            <FolderIcon />
            integrations
          </div>
        </li>
      </ul>
    </div>
  );
}
