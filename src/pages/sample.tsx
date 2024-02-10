import Link from 'next/link'

function Sample(){
    return (
        <div>
        <span>sampleやで〜</span>
        <Link href="/">
            <p>
            ホームページへ
            </p>
        </Link>
        <Link href={{
            pathname:'/ssg',
            query:{message:'hello'}
        }}>
            <p>
                ssgへ
            </p>
        </Link>

        </div>
    )
}

export default Sample