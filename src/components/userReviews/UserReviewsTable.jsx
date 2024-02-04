import './UserReviewsTable.css';

export default function UserReviewsTable({allHouses , housesLikes , housesDisLikes , housesText}) {
    return (
        <div>
          <h2>User Reviews</h2>
          <table border="1">
            <thead>
              <tr>
                <th>House</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              {allHouses.map((house, index) => (
                <tr key={index}>
                  <td>{house.name}</td>
                  <td>
                    {housesLikes && housesLikes.length > 0 ? (
                      housesLikes
                        .filter((houseLike) => houseLike.houseId.trim() === String(house.id).trim())
                        .map((like, likeIndex) => (
                          <img
                            key={likeIndex}
                            className="user-reviews-img"
                            src={like.houseLikes.likerImg}
                            alt="like.houseLikes.likerImg"
                          ></img>
                        ))
                    ) : (
                      null
                    )}
                  </td>
                  <td>
                    {housesDisLikes && housesDisLikes.length > 0 ? (
                      housesDisLikes
                        .filter((houseDisLike) => houseDisLike.houseId.trim() === String(house.id).trim())
                        .map((disLike, disLikeIndex) => (
                          <img key={disLikeIndex} className="user-reviews-img" src={disLike.houseDisLikes.disLikerImg} alt="like.houseDisLikes.disLikerImg"></img>                    
                        ))
                    ) : (
                      null
                    )}
                  </td>
                  <td>
                  {housesText && housesText.length > 0 ? (
                    housesText
                      .filter((houseText) => houseText.houseId.trim() === String(house.id).trim())
                      .map((textItem, textIndex) => (
                        <img
                          key={textIndex}
                          className="user-reviews-img"
                          src={textItem.textItem.reviewerImg}
                          alt="textItem.textItem.reviewerImg"
                        ></img>
                      ))
                      ) : (
                        null
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
