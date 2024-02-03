import "./gallery.css";

export default function Gallery() {
    const Events = [{ name: "event1" }, { name: "event2" }];

    const Images = [
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
        { img: "1.jpeg" },
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
