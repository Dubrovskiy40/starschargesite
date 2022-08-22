import {
    Cards,
    Header,
    Feedback,
    SwiperLine,
    SwiperParallax,
    MapContainer,
    ScrollButton,
    Footer,
} from "../../components";
import MenuStore from "../../store/MenuStore";
import {useEffect, useState} from "react";
import Team from "../../components/Team/Team";

function Home() {
    const [itemslocal, setItemsLocal] = useState([]);
    const fetchData = async () => {
        await MenuStore.fetchMenuItems()
        setItemsLocal(MenuStore.items.map((item) => item.name))
    };

    useEffect(() => {
        fetchData().then();
    }, []);


    return (
        <>
            <Header/>
            <SwiperLine menuName={itemslocal[0]}/>
            <SwiperParallax menuName={itemslocal[1]}/>
            <Cards menuName={itemslocal[2]}/>
            <Team/>
            <MapContainer menuName={itemslocal[3]}/>
            <Feedback/>
            <ScrollButton/>
            <Footer/>
        </>
    );
}

export default Home;
