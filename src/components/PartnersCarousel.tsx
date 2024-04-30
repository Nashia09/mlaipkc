import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Partner {
    name: string;
    logoUrl: string;
  
}

function PartnerCarousel({ partners }: { partners: Partner[] }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {partners.map((partner, index) => (
                <div key={index}>
                    <img
                        src={partner.logoUrl}
                        alt={partner.name}
                        className="mx-auto h-24"
                    />
                    <h3>{partner.name}</h3>
                </div>
            ))}
        </Slider>
    );
}

export default PartnerCarousel;
