function Count() {
    return (
        <div className="flex gap-10 pl-[25%] py-10">
            <div>
                <img className="w-[640px]" src="/new-team-members-animate.svg" alt="test" />
            </div>
            <div className="flex items-center">
                <p className="text-4xl first-letter:text-6xl w-1/2">
                    La communauté compte aujourd'hui <span className="text-6xl"> 15 </span>
                    Les membres avec différents parcours au sein de l'ÉMIT.
                </p>
            </div>
        </div>
    );
}
export default Count;