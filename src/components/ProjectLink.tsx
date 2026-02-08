type ProjectLinkProps = {
  url: string;
  //   label?: string;
  isGithub?: boolean;
  newTab?: boolean;
};

export default function ProjectLink({
  url,
  //   label = "View Project",
  isGithub = false,
  newTab = true,
}: ProjectLinkProps) {
  const handleClick = () => {
    if (newTab) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={
        isGithub
          ? "inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-transparent text-white rounded hover:bg-gray-700 transition-colors"
          : "inline-flex items-center gap-2 px-4 py-2 bg-none border-secondary border text-white rounded hover:bg-secondary/60 transition-colors"
      }
    >
      {url.length < 1
        ? "No Link Available"
        : isGithub
          ? "View GitHub"
          : "View Live Demo"}
    </button>
  );
}
