import './FilterBar.css';
export default function FilterBar (props){
    var list=['All'];
    if(props.cats.length>0){
        list=[...list,...props.cats]
    }
    else list=["there is no Cathegories !!!"]
    return(
        <div className="filter-bar">
            <select name="catFilter" id="" onChange={props.filterByCat}>
                <option value="">Filter by Cathegory</option>
                {
                    list.length>1?
                    list.map(item=><option key={item} value={item}>{item}</option>):
                    <option value="">{list[0]}</option>
                }
            </select>
        </div>
    )
}