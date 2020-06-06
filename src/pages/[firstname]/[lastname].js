import {useRouter} from 'next/router'
import {HashCode} from '../../modules/hashcode'
import {Tile} from '../../component/tile'

export default function Aesthetic() {
    const router = useRouter();
    let seed = `${router.query.firstname} ${router.query.lastname}`;

    let offset = 2 + Math.abs(HashCode(seed) % 2)

    console.log(offset)

    return(
        <div className="grid grid-cols-5 h-full min-h-full max-h-full">
                    <Tile span={offset}   seed={seed} id={1} />
                    <Tile span={5-offset} seed={seed} id={2} />
                    <Tile span={5-offset} seed={seed} id={3} />
                    <Tile span={offset}   seed={seed} id={4} />
                    <img src="https://hampton.goatcounter.com/count?p=/projects/nameaesthetics/aesthetics" style={{display: "none"}}></img>
        </div> 

    )
}
