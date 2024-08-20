import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import useAxios from "../../hooks/useAxios";
import { changeLikeStatus, createCard, deleteCard, getCard, getCards, getMyCards } from "../services/cardsApiService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function useCards() {
    const [cards, setCards] = useState([]);
    const [myCards, setMyCards] = useState([]);
    const [card, setCard] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const navigate = useNavigate()
    const {user} = useCurrentUser() 

    const setSnack = useSnack();
    useAxios()

    const getAllCards = useCallback(async () => {
        try {
            let data = await getCards()
            setCards(data);
            setSnack("success", "All cards are here!");
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);
    
    const getCardsById = useCallback(async (id) => {
        try {
            let data = await getCard(id)
            setCard(data);
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);
    
    const HandleGetMyCards = useCallback(async () => {
        try {
            let data = await getMyCards()
            setMyCards(data);
            setSnack("success", "All cards are here!");
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
        setIsLoading(false);
    }, []);
    
    const handleCreateCard = useCallback(async (card) => {
        try {
            await createCard(card)
            setSnack("success", "Card added successfully!");
            setTimeout(() => {
                navigate(ROUTES.CARDS);
            }, 2000)
        } catch (err) {
            setError(err.message);
            setSnack("error", err.message);
        }
    }, []);
    
    const handleDelete = useCallback((id) => {
        deleteCard(id)
        setSnack("info", `Card ${id} was deleted successfully`);
    }, []);

    const handleEdit = (id) => {
        console.log(`Editing the card ${id}`);
    };
    

    const handleLike = useCallback(async (id) => {        
        let card = await changeLikeStatus(id)     
        return card.likes.includes(user._id);
    }, [user]);
    
    return { cards, myCards, error, isLoading, card, getCardsById, HandleGetMyCards, getAllCards, handleCreateCard, handleDelete, handleLike, handleEdit };
}

