import React from 'react'
import PropTypes from 'prop-types';
import './../assets/cards.css';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            facingUp: false,
            suit: this.getSuit(),
            symbol: this.getSymbol(),
            value: this.getValue(),
        };
    }

    getSuit(){
        switch (new String(this.props.card[1]).toLowerCase()) {
            case 's': return "spades";
            case 'c': return "clubs";
            case 'd': return "diamonds";
            case 'h': return "hearts";
            default: return "*";
        }
    }

    getSymbol(){
        switch (new String(this.props.card[1]).toLowerCase()) {
            case 's': return <span className="suit">&spades;</span>;
            case 'c': return <span className="suit">&clubs;</span>;
            case 'd': return <span className="suit">&diams;</span>;
            case 'h': return <span className="suit">&hearts;</span>;
            default: return "*";
        }
    }

    getValue(){
        if( this.props.card && this.props.card[0] ){
            if( parseInt(this.props.card) ){
                return parseInt(this.props.card);
            } else {
                const first = this.props.card[0];
                return first;
            }
        }
    }

    render(){
        if( ! this.props.card || this.props.hidden ){
            return <div className="card back">*</div>;
        }

        return <div className={['card',`rank-${this.getValue()}`,this.getSuit()].join(' ')}
                    onClick={this.props.onClick}>
            <span className="rank">{this.getValue()}</span>
            {this.getSymbol()}
        </div>;
    }
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  card: PropTypes.string.isRequired,
};

export default Card
