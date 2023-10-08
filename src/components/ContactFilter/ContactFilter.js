import { useDispatch } from "react-redux";
import { FilterContainer, 
         FilterText,
         FilterInputn } from "./ContactFilter.styled"
import { sliseFilter } from "redux/filterSlise";

export const ContactFilter = ({filter, onChangeFilter}) => {
    const dispatch = useDispatch();
return (
    <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInputn
         type="text"
         value={filter}
         onChange={evt => dispatch(sliseFilter(evt.target.value))}
         />
    </FilterContainer>
)
}