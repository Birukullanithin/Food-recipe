import React from 'react';
import { Card } from 'react-bootstrap';


const RecipeCard = (props) => {
    return (
        
            <div className="card-container">
                <Card className="card">
                    <Card.Img variant="top" src={props.data.recipe.image} className="card-img-top" />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">{props.data.recipe.label}</Card.Title>
                        <Card.Text className="card-text">
                            calories={Math.round(props.data.recipe.calories)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        
    );
};

export default RecipeCard;
