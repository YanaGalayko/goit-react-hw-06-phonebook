import { useDispatch, useSelector } from "react-redux";
import { FilterContainer, 
         FilterText,
         FilterInputn } from "./ContactFilter.styled"
import { filterContacts } from "redux/filterSlise";

export const ContactFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    
return (
    <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInputn
        name="filter"
         type="text"
         value={filter}
         onChange={evt => dispatch(filterContacts(evt.target.value))}
         />
    </FilterContainer>
)
}