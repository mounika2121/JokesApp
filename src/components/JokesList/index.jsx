import './index.css';

const JokesList = (props) => {
    const {jokesDetails} = props;
    const {category,id,joke} = jokesDetails;

    return(
        <tr>
            <td>{id}</td>
            <td>{category}</td>
            <td>{joke}</td>
        </tr>
    )
}

export default JokesList;
