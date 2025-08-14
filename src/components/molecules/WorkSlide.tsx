import { type FC } from 'react';

export type slideImage = {
	src: string,	
}
type props = {
	slideImage: slideImage[],
}

const WorkSlide: FC<props> = ({ slideImage }) => {
	return (
		<div>
			<div></div>
			<ul>
        {slideImage.map((image, index) => (
          <li key={index}>
            <img src={image.src} alt={`${index}`} />
          </li>
        ))}
      </ul>
			<div></div>
		</div>
	);
};
export default WorkSlide;