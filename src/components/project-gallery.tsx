import { ProjectImage } from "@/data/site-data";

type Props = {
  images: ProjectImage[];
  projectTitle?: string;
  showDownloads?: boolean;
};

export function ProjectGallery({ images, projectTitle, showDownloads = true }: Props) {
  return (
    <div className="space-y-6">
      {showDownloads ? (
        <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <p className="text-sm font-semibold text-text">Download full-resolution files</p>
            <p className="mt-1 text-xs text-muted">
              Original PNGs (576×1024) — no compression applied. Best for print and sharing.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {images.map((image) => (
              <a
                key={image.src}
                href={image.src}
                download={image.fileName}
                className="btn-secondary px-3 py-2 text-xs"
              >
                {image.downloadLabel}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c1e]"
          >
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#f5f3ee] p-2 sm:p-3"
              title={`View full size — ${image.caption}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mx-auto h-auto w-full"
                decoding="sync"
                loading="lazy"
              />
            </a>
            <figcaption className="space-y-3 border-t border-white/[0.06] px-4 py-4">
              <p className="text-sm text-text">{image.caption}</p>
              {showDownloads ? (
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={image.src}
                    download={image.fileName}
                    className="btn-primary px-4 py-2 text-xs"
                  >
                    Download PNG
                  </a>
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-4 py-2 text-xs"
                  >
                    Open full size
                  </a>
                  <span className="text-xs text-muted">
                    {image.width}×{image.height}px
                  </span>
                </div>
              ) : (
                <a
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex px-4 py-2 text-xs"
                >
                  Open full size
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {projectTitle ? (
        <p className="text-center text-xs text-muted">
          {projectTitle}
          {showDownloads ? " — powered by SBJ Studio. Files are served at original quality from this site." : " — designed by SBJ Studio."}
        </p>
      ) : null}
    </div>
  );
}
