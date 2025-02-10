import PropTypes from "prop-types"; // Import PropTypes
import blueBackground from "../assets/btn_background.png";

export default function LearnMoreButton({ data }) {
    return (
        <div
            style={{
                backgroundImage: `url(${blueBackground})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="ps-7 pe-3.5 w-56 py-3 text-white font-semibold flex items-center justify-between rounded-lg cursor-pointer"
        >
            <h1>{data}</h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
            </svg>
        </div>
    );
}

LearnMoreButton.propTypes = {
    data: PropTypes.string.isRequired,
};
