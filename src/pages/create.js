import { useState } from "react";
import { useAppContext } from "../store/store";
import Layout from "../component/layout";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    const store = useAppContext();
    const navigate = useNavigate();

    const inputStyles = {
        formContainer: {
          width: "400px",
          margin: "0 auto",
        },
        container: {
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          margin: "15px 0",
        },
        title: {
          fontSize: "16px",
          textAlign: "left",
          color:"white"
        },
        input: {
          padding: "10px",
          borderRadius: "5px",
          fontSize: "16px",
        },
      };

      const buttonStyle = {
        padding: "15px 20px",
        minWidth: "200px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#1e9638",
        color: "white",
        fontWeigth: "bolder",
        fontSize: "18px",
      }

    function handleChangeText(event) {
        switch (event.target.name) {
            case "title":
                setTitle(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            case "intro":
                setIntro(event.target.value);
                break;
            case "completed":
                setCompleted(event.target.checked);
                break;
            case "review":
                setReview(event.target.value);
                break;
            default:
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newBook = {
            id:crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        };

        store.createItem(newBook)
        navigate("/");
    }

    function handleOnChangeFile(event) {
        const element = event.target;
        const file = element.files[0];
        const reader = new FileReader();
        reader.onloadend = function() {
            setCover(reader.result.toString());
        };
        reader.readAsDataURL(file);
    }

    return(
        <Layout>
            <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Title</div>
                    <input
                    type="text"
                    name="title"
                    onChange={handleChangeText}
                    value={title}
                    style={inputStyles.input} />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Author</div>
                    <input
                    type="text"
                    name="author"
                    onChange={handleChangeText}
                    value={author}
                    style={inputStyles.input} />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Cover</div>
                    <input
                    type="file"
                    name="cover"
                    onChange={handleOnChangeFile}
                    style={inputStyles.input} />
                    <div> { !!cover ? <img src={cover} width="200" alt="preview" /> : ""} </div>
                </div>
                <div style={inputStyles.container} >
                    <div style={inputStyles.title} >Introduction</div>
                    <input
                    type="text"
                    name="intro"
                    onChange={handleChangeText}
                    value={intro}/>
                </div>
                <div style={inputStyles.container} >
                    <div style={inputStyles.title}> Completed</div>
                    <input
                    type="checkbox"
                    name="completed"
                    onChange={handleChangeText}
                    value={completed}
                    style={inputStyles.input} />
                </div>
                <div style={inputStyles.container} >
                    <div style={inputStyles.title} >Review</div>
                    <input
                    type="checkbox"
                    name="review"
                    onChange={handleChangeText}
                    value={review}
                    style={inputStyles.input} />
                </div>
                <input type="submit" value="Register book" style={buttonStyle} />
            </form>
        </Layout>
    )
}