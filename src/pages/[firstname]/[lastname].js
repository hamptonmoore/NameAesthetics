import {useRouter} from 'next/router'
import {HashCode} from '../../modules/hashcode'
import {Tile} from '../../component/tile'

export default function Aesthetic() {
    const router = useRouter();
    let seed = `${router.query.firstname} ${router.query.lastname}`;

    let offset = 2 + (HashCode(seed) % 2)

    return(
        <div className="grid grid-cols-5 h-full min-h-full max-h-full">
                    <Tile span={offset}   seed={seed} id={1} />
                    <Tile span={5-offset} seed={seed} id={2} />
                    <Tile span={5-offset} seed={seed} id={3} />
                    <Tile span={offset}   seed={seed} id={4} />
        </div> 
    )
}
