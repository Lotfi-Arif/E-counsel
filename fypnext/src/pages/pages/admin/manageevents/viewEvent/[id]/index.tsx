import { useRouter } from "next/router";
import { useEventQuery } from "schema/generated/graphql";
import Navbar from "src/components/Navbar/MainNavbar";
import { withApollo } from "utils/hooks/withApollo";

const ViewEvent = () => {

    const router = useRouter()
    const { id, isRefetch } = router.query
    const {data} = useEventQuery(id as any);

    

    //   console.log(data.findOneEvent)

    return (
        <>
            <Navbar />
            <div className="mt-6 bg-gray-50">
                <div className=" px-10 py-6 mx-auto">

                    {/* <!--author--> */}
                    <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">

                        <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                            <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="here" />
                        </a>

                        {/* <!--post categories--> */}
                        <div className="flex items-center justify-start mt-4 mb-4">
                            <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500">web development</a>
                        </div>
                        <div className="mt-2">
                            {/* <!--post heading--> */}
                            <a href="#"
                                className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline">Django Authentication with oauth using facebook,twitter and google</a>

                            {/* <!--post views--> */}
                            <div className="flex justify-start items-center mt-2">
                                <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">3000</p>
                                <p className="text-sm text-gray-400 font-bold ml-5">Views</p>

                            </div>

                            {/* <!--author avator--> */}
                            <div className="font-light text-gray-600">

                                <a href="#" className="flex items-center mt-6 mb-6"><img
                                    src="https://avatars.githubusercontent.com/u/71964085?v=4"
                                    alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                    <h1 className="font-bold text-gray-700 hover:underline">By James Amos</h1>
                                </a>
                            </div>
                        </div>

                        {/* <!--end post header-->
                        <!--post content--> */}
                        <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">

                            {/* <!--content body--> */}
                            <div>
                                <p className="mt-2 p-8">If you created a web application and wanted it to grow a user base reall quickly,the easiest way is to avoid bothering them with alot forms. No one likes filling up forms! A web form should and must only be used when necessary,in case a user doesnt have account with any of the social networks.That is the moment you want to implement social login on your application.</p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withApollo(ViewEvent);