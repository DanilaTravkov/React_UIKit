const primaryButtonStyles = "border-2 border-slate-500 text-white font-normal py-3 px-4 rounded-2xl bg-transparent hover:bg-zinc-500/10 transition";
const secondaryButtonStyles = "border-2 border-slate-500 text-white font-thin py-2 px-4 rounded-2xl bg-transparent hover:bg-zinc-500/10 transition";
const disabledButtonStyles = "text-white/60 hover:cursor-not-allowed hover:bg-transparent";
const ghostButtonStyles = "";

const primaryTextInputStyles = "border-2 border-slate-500 p-2 mt-1 w-full text-white rounded-lg bg-transparent font-thin focus:border-teal-800";
const secondaryTextInputStyles = "bg-transparent";
const disabledTextInputStyles = "bg-transparent";

const selectHeaderStyles = "p-2 border-2 border-slate-500 rounded-lg cursor-pointer hover:bg-zinc-500/10";
const selectStyles = "border-2 border-slate-500 rounded-xl rounded-t-none border-t-0 text-start bg-transparent text-white rounded-lg font-thin focus:border-teal-800";
const optionStyles = "rounded-xl text-start p-2 bg-transparent text-white cursor-pointer hover:bg-zinc-500/10";

const gridItemStyles = "bg-transparent border-2 border-slate-500 text-white flex justify-center items-center hover:bg-zinc-500/10 transition";

const contentCardContainerStyles = "relative border-2 border-slate-500 bg-transparent m-4 rounded-xl overflow-hidden group cursor-pointer";

const checkBoxStyles = `w-6 h-6 border-2 border-slate-500 rounded-lg transition cursor-pointer
                        peer-checked:border-slate-200 peer-hover:bg-zinc-500/10
                        `;

export {
    primaryButtonStyles,
    secondaryButtonStyles,
    disabledButtonStyles,
    ghostButtonStyles,
    primaryTextInputStyles,
    secondaryTextInputStyles,
    disabledTextInputStyles,
    selectStyles,
    optionStyles,
    selectHeaderStyles,
    gridItemStyles,
    contentCardContainerStyles,
    checkBoxStyles
}
