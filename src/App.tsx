import { useState } from 'react';
import moment from 'moment';
import 'moment/dist/locale/ru';

interface IVideo {
    url: string,
    date: string
}

interface IVideoListProps {
    list: Array<IVideo>;
}

function DateTime({ date }: { date: string }) {
    return (
        <p className="date">{date}</p>
    )
}

const withPrettyDate = (WrappedComponent : any) => {
    return (props : any) => {
        return (
            <WrappedComponent
                {...props}
                date={moment(props.date).fromNow()}
            >
            </WrappedComponent>
        )
    }
}

function Video({ url, date }: IVideo) {
    const DateTimePrettied = withPrettyDate(DateTime);
    return (
        <div className="video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePrettied date={date} />
        </div>
    )
}

function VideoList({ list }: IVideoListProps) {
    return list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    moment.locale('ru');
    const [list, setList] = useState<IVideo[]>([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-11-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}