import './presentationBoxes.css';
import Image from 'next/image';

interface BoxProps {
    boxInfo: {
        titleQuote: string;
        tagDescription: string;
        boxPresentation: string;
        imgSrc: string;
        imgAlt: string;
    }
    reverse?: boolean;
    mirrorImage?: boolean;
}


export default function PresentationBoxes({ boxInfo, reverse = false, mirrorImage = false }: BoxProps) {
    const { titleQuote, tagDescription, boxPresentation, imgSrc, imgAlt } = boxInfo;

  return (
    <section>
        <div className={`presentation-container ${reverse ? 'presentation-reverse' : ''}`}>
            <div className="presentation-img">
                <Image 
                src={imgSrc} 
                alt={imgAlt}
                fill
                loading="lazy"
                sizes="(max-width: 48rem) 100vw, 50vw"
                quality={90}
                className={mirrorImage ? 'img-mirrored' : ''}
                />
                <div className="tag-container">
                    <div className="tag-box">
                        <h2>{tagDescription}</h2>
                    </div>
                </div>
            </div>

            <div className="description-wrapper">
                <h3 className="description-title">
                    <strong><br />{titleQuote}</strong>
                </h3>
                <div id="title-line" aria-hidden="true"></div>
                <div className="description-box">
                    <p>{boxPresentation}</p>
                </div>
            </div>
        </div>
    </section>
  );
}