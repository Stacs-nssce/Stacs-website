import "./gallery.css";

export default function Gallery() {
    const Events = [{ name: "event1" }, { name: "event2" }];

    const Images = [
        { img: "1.jpeg" },
        { img: "2.jpeg" },
        { img: "3.jpeg" },
        { img: "4.jpeg" },
        { img: "5.jpeg" },
        { img: "6.jpeg" },
        { img: "7.jpeg" },
        { img: "8.jpeg" },
        { img: "9.jpeg" },
        { img: "10.jpeg" },
    ];

    return (
        <div className="gallery">
            <div className="events">
                {Events.map((events) => (
                    <div>{events.name}</div>
                ))}
            </div>
            <div className="images">
                {Images.map((images) => (
                    <div>
                        <img src={require(`./images/${images.img}`)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
