import React, { FC, useEffect, useState } from "react";

export interface DiffTimeProps {
    from: Date;
    to?: Date
}


const diff = (from: Date, to: Date): number => Math.round((to.getTime() - from.getTime()) / 1000)

export const DiffTime: FC<DiffTimeProps> = ({
    from,
    to
}) => {
    const [now, setNow] = useState<Date>(new Date())
    useEffect(() => {
        if (to === undefined) {
            const t = setInterval(
                () => setNow(new Date()),
                1000
            )
            return () => clearInterval(t)
        }
    }, [to])
    return <span>{diff(from, to || now)}s</span>;
};

export default DiffTime;
