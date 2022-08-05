
import Select from 'react-select'

interface IOptionMap{    
    label:string
    value:string,
}
interface IFilter {
    optionsName:string[],
    onHandleOptions:(opt: any)=> void;
}

export function Filter({ optionsName,onHandleOptions}:IFilter){
    return (
        <Select 
                options={optionsName}
                onChange={(opt) => onHandleOptions(opt)}
        />
    )

}