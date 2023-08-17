import { usePathname } from 'next/navigation';
import * as Styled from './style'
import Link from 'next/link';

interface ButtonProps {
    text: string
    path: string
}

export function ButtonUser(props: ButtonProps) {

    const pathName = usePathname();

    const isActive = pathName === props.path;

    return (
        <Styled.ButtonLink $isactive={isActive ? 1 : 0}>
            <Link href={props.path}>
                {props.text}
            </Link>
        </Styled.ButtonLink>
    )
}