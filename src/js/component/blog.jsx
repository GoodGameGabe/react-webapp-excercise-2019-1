import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';

import '../../styles/blog.css';

function BlogPost(props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.posts.map((item, index) => {
                              return (<div>
                              <h2 key={index}>{item.title}</h2>
                              <p key={index}>{item.date} by {item.author}</p>
                              <p key={index}>{item.content.substring(0,800)}</p>
                              </div>);
                            })
                        );
                     }
                }
            </Context.Consumer>
    );
}

BlogPost.propTypes = {
    items: PropTypes.array
};

export default Store(BlogPost);