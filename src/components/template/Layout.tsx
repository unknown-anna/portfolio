import { type FC } from "react";

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({children}) => {
	return (
		<div>
      {children}
		</div>
	);
}
export default Layout