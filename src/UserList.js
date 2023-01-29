import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import useLazyLoad from "./useLazyLoad";
import { Card } from './Card';
import { LoadingPosts } from './LoadingList';


const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

export const UserList = () => {
    const [user, setUser] = useState([])
    useEffect(() => {      
        fetchfunc()
    }, [])

    const fetchfunc = () => {
        axios.get("https://randomuser.me/api/?results=1000").then((response) => {
            const responseUser = response.data.results
            setUser(responseUser)
        }).catch((error) => { console.error(error) })
    }
    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
        setTimeout(() => {
            const data = user.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            );
            resolve(data);
        }, 3000);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    return (
        <>
        <div className="flex items-start justify-center flex-wrap gap-4">
        {data.map((user, index) => {
            return <Card key={index} name={user.name} email={user.email} phone={user.phone} gender={user.gender} picture={user.picture} />
        })}
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingPosts />
        </div>
        </>
    );
}