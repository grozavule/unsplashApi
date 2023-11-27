import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
    const [images, setImages] = useState([]);

    const onSearchSubmit = async (term) => {
        let images = await searchImages(term);
        setImages(images);
    };

    return (
        <div className="container">
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    );
}
export default App;
