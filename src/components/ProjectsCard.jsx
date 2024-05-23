import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <>
      <div
        className="card w-96 bg-base-100 rounded-lg shadow-sm hover:shadow-xl duration-300 cursor-pointer"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl aspect-video" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="mt-4 text-slate-700 leading-loose">{text}</p>
          <div className="mt-4 flex gap-x-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="Website"
            >
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip"
              data-tip="Github Repo"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Choose a Link</h3>
          <p className="py-4">
            {" "}
            <div className="mt-4 flex gap-x-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip"
                data-tip="Website"
              >
                <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip"
                data-tip="Github Repo"
              >
                <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
            </div>
          </p>
        </div>
      </dialog>
    </>
  );
};
export default ProjectsCard;
