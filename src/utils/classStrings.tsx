// !!! Warning !!!
// This file contains all the class strings for the components in this project. 
// This file is not meant to be imported anywhere else.
// It is unrecommended to edit this file directly.

const _primaryButtonStyles = "border-2 border-slate-500 text-white font-normal py-3 px-4 rounded-2xl bg-transparent hover:bg-zinc-500/10 transition";
const _secondaryButtonStyles = "border-2 border-slate-500 text-white font-thin py-2 px-4 rounded-2xl bg-transparent hover:bg-zinc-500/10 transition";
const _disabledButtonStyles = "text-white/60 hover:cursor-not-allowed hover:bg-transparent";
const _ghostButtonStyles = "";

const _primaryTextInputStyles = "border-2 border-slate-500 p-2 mt-1 w-full text-white rounded-lg bg-transparent font-thin focus:border-teal-800";
const _secondaryTextInputStyles = "bg-transparent";
const _disabledTextInputStyles = "bg-transparent";

const _selectHeaderStyles = "p-2 border-2 border-slate-500 rounded-lg cursor-pointer hover:bg-zinc-500/10";
const _selectStyles = "border-2 border-slate-500 rounded-xl rounded-t-none border-t-0 text-start bg-transparent text-white rounded-lg font-thin focus:border-teal-800";
const _optionStyles = "rounded-xl text-start p-4 bg-transparent text-white cursor-pointer hover:bg-zinc-500/10";

const _gridItemStyles = "bg-transparent border-2 border-slate-500 text-white flex justify-center items-center hover:bg-zinc-500/10 transition";

const _contentCardContainerStyles = "relative border-2 border-slate-500 bg-transparent m-4 rounded-xl overflow-hidden group cursor-pointer";

const _checkBoxStyles = `w-6 h-6 border-2 border-slate-500 rounded-lg transition cursor-pointer
                        peer-checked:border-slate-200 peer-hover:bg-zinc-500/10
                        `;
const _toastStyles = `fixed z-40 p-4 w-1/4 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out`;
const _toastContainerStylesCentered = `fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md`;
const _toastContainerStylesDefault = `fixed bottom-4 right-4 z-50 w-full max-w-md`;

const _toggleSwitchContainerStyles = `transition-colors shadow-slate-500 relative w-12 h-6 rounded-full m-4 border-2 border-slate-500`;
const _toggleSwitchElementStyles = `transition-transform absolute shadow-sm bg-white shadow-black w-1/2 h-full rounded-full`;

export {
    _primaryButtonStyles,
    _secondaryButtonStyles,
    _disabledButtonStyles,
    _ghostButtonStyles,
    _primaryTextInputStyles,
    _secondaryTextInputStyles,
    _disabledTextInputStyles,
    _selectStyles,
    _optionStyles,
    _selectHeaderStyles,
    _gridItemStyles,
    _contentCardContainerStyles,
    _checkBoxStyles,
    _toastStyles,
    _toastContainerStylesCentered,
    _toastContainerStylesDefault,
    _toggleSwitchContainerStyles,
    _toggleSwitchElementStyles
}
