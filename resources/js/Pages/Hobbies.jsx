import {Head, useForm, usePage} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/GuestLayout.jsx";
import {hobbies} from "../../lib/Hobbies.js";

export default function Hobbies(props){
    const userHobbies = props['hobbies']
    const user = usePage().props.auth.user;
    const { data, setData, post, delete: destroy, processing, errors, } = useForm({
       hobby_name: ''
    });
    function submit(e) {
        e.preventDefault();
        if(!userHobbies.includes(data.hobby_name)) {
            post(route('hobby.store'));
        }else{
            destroy(route('hobby.delete', {'hobby': props.totalList[userHobbies.indexOf(data.hobby_name)]}));
        }
    }

    return(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl md:text-4xl font-semibold leading-tight text-gray-800">
                    {user.name}'s Hobbies
                </h2>
            }
        >
            <Head title="Hobbies" />
            <form className={'flex flex-col justify-center items-center gap-8'} onSubmit={submit}>
            <div className={'mt-4 max-h-52 sm:max-h-full overflow-y-auto flex gap-4 flex-wrap'}>
                {hobbies.map(el =>
                <button
                    key={el}
                    onClick={(e) => {
                            setData('hobby_name', el)
                        }
                } className={`p-2 md:p-4 rounded-md border-2 ${userHobbies.includes(el) ?`bg-[#B88914] text-[#F2E8CF]` : `bg-[var(--background)] border-[#B88914]`} font-sans font-bold`}>
                    {el}
                </button>
                )}
            </div>
                <button onClick={(e) => e.preventDefault() } className={'px-12 py-2 rounded-md bg-red-700/80 text-white md:text-2xl font-baskerville font-bold'}>Submit</button>
            </form>
        </AuthenticatedLayout>
    )
}
