import { useAppContext } from "../store/store"
import Layout from "../component/layout";
import Book from "../component/book";

export default function Index() {
    const store = useAppContext();

    const booksContainer = {
        display: "flex",
        flexWrap: "wrap",
        grap: "10px",
    }

    return(
        <Layout>
            <div style={booksContainer}>
                {store.items.map((item) => (
                    <Book key={item.id} item={item}/>
                ))}
            </div>
        </Layout>
    )
}