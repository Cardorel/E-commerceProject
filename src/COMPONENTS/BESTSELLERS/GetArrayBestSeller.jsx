import React, {memo} from 'react'
import BestSellerContent from './BestSellerContent';



 function GetArrayBestSeller({item}) {   
    let array = [];  
      array.push(item);

    return  array
             .map(item => <BestSellerContent key={item.id} item={item}/> )
      
}

export default memo(GetArrayBestSeller)