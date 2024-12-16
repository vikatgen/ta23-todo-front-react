import { Outlet } from "react-router-dom";

export const LoginLayout = () => {
    return (
        <div className="min-h-[100dvh] min-w-[100vw] grid grid-cols-2">
            <section className="border-r">
                <Outlet />
            </section>
            <section>
                Siia tuleb pilt
            </section>
        </div>
    )
}