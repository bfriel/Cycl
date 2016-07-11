Comment.create!([
  {ride_id: 43, user_id: 20, body: "Scary!", author: "Kathe"},
  {ride_id: 41, user_id: 19, body: "Welcome to Cycl!", author: "Brian"},
  {ride_id: 44, user_id: 21, body: "You can do better than that!", author: "Hannah"},
  {ride_id: 44, user_id: 22, body: "Hope you wore a jacket!", author: "Dan"},
  {ride_id: 46, user_id: 22, body: "How does this comment thing work?", author: "Dan"},
  {ride_id: 45, user_id: 22, body: "Way to push yourself!", author: "Dan"},
  {ride_id: 46, user_id: 18, body: "Type your message at the bottom, then hit enter!", author: "Haley"},
  {ride_id: 45, user_id: 18, body: "Woohoo!", author: "Haley"},
  {ride_id: 41, user_id: 18, body: "Thanks! Can't wait to get back out there!", author: "Haley"},
  {ride_id: 47, user_id: 23, body: "This looks awesome!", author: "Kabir"},
  {ride_id: 48, user_id: 24, body: "Looks pretty boring dude", author: "Tony"},
  {ride_id: 47, user_id: 24, body: "Did you have to pay a toll?", author: "Tony"},
  {ride_id: 49, user_id: 25, body: "OMG! I couldn't bike those hills", author: "Steven"},
  {ride_id: 46, user_id: 22, body: "Hey, thanks!", author: "Dan"},
  {ride_id: 48, user_id: 22, body: "Still beats my commute!", author: "Dan"},
  {ride_id: 47, user_id: 18, body: "Nope! Totally Free!", author: "Haley"},
  {ride_id: 47, user_id: 22, body: "How cool! I want to try this", author: "Dan"},
  {ride_id: 47, user_id: 21, body: "Was it tough?", author: "Hannah"},
  {ride_id: 47, user_id: 18, body: "Not at all! We should do it together soon!", author: "Haley"},
  {ride_id: 52, user_id: 20, body: "Wow, this is impressive!", author: "Kathe"},
  {ride_id: 52, user_id: 25, body: "Let's train together soon!", author: "Steven"},
  {ride_id: 49, user_id: 18, body: "Cool ride, Tony!", author: "Haley"},
  {ride_id: 53, user_id: 18, body: "Holy cow!", author: "Haley"},
  {ride_id: 53, user_id: 22, body: "Hope you treated yourself to a nice meal afterwards!", author: "Dan"},
  {ride_id: 50, user_id: 20, body: "Nice ride, Steven!", author: "Kathe"},
  {ride_id: 55, user_id: 23, body: "Was traffic bad at all?", author: "Kabir"},
  {ride_id: 55, user_id: 18, body: "Not in the bike lane!", author: "Haley"},
  {ride_id: 55, user_id: 19, body: "Go team!", author: "Brian"},
  {ride_id: 56, user_id: 24, body: "Did you do this solo?", author: "Tony"},
  {ride_id: 56, user_id: 22, body: "No, me and my buddy Steven did it together!", author: "Dan"},
  {ride_id: 56, user_id: 25, body: "It was so hard!", author: "Steven"}
])
Following.create!([
  {following_id: 18, follower_id: 19},
  {following_id: 18, follower_id: 21},
  {following_id: 19, follower_id: 18},
  {following_id: 21, follower_id: 18},
  {following_id: 22, follower_id: 18},
  {following_id: 20, follower_id: 18},
  {following_id: 19, follower_id: 23},
  {following_id: 23, follower_id: 24},
  {following_id: 24, follower_id: 25},
  {following_id: 18, follower_id: 22},
  {following_id: 24, follower_id: 18}
])
Ride.create!([
  {user_id: 18, ride_path: "[[37.78038406044851,-122.44734653707167],[37.77919717953236,-122.45871886769163],[37.77418028696985,-122.45837752974137],[37.77581780944428,-122.44642806291051],[37.78040361811934,-122.4474645284327]]", ride_name: "First Ride", elevation_gain: 223, distance: 2.0, ride_description: "Just around the neighborhood", duration: 1098, calories_burned: 94, start_pos: "37.78040361811934,-122.4474645284327", rider: "Haley"},
  {user_id: 19, ride_path: "[[37.82459645659944,-122.3716318244575],[37.817678083472984,-122.36747596788541],[37.819339614132666,-122.36452051556307],[37.8239977373204,-122.36405987992498],[37.825269900818256,-122.3669939084507],[37.824739897698784,-122.3712617858913]]", ride_name: "Pirates!", elevation_gain: 52, distance: 1.0, ride_description: "Yarr!!", duration: 1342, calories_burned: 73, start_pos: "37.824739897698784,-122.3712617858913", rider: "Brian"},
  {user_id: 20, ride_path: "[[37.73838582842591,-122.50652605922278],[37.77484830154743,-122.51080259120607],[37.73837732843195,-122.50652494211113]]", ride_name: "Ocean Beach", elevation_gain: 134, distance: 5.0, ride_description: "Super windy out!", duration: 3600, calories_burned: 213, start_pos: "37.73837732843195,-122.50652494211113", rider: "Kathe"},
  {user_id: 21, ride_path: "[[37.82834352815269,-122.52554692934518],[37.827688058829864,-122.51115132624676],[37.8335303893758,-122.49406415240657],[37.833759948045135,-122.48365686719211]]", ride_name: "Golden Gate Views", elevation_gain: 915, distance: 7.0, ride_description: "Super hilly but awesome views!", duration: 2722, calories_burned: 280, start_pos: "37.833759948045135,-122.48365686719211", rider: "Hannah"},
  {user_id: 22, ride_path: "[[37.770684277661054,-122.45531993313153],[37.76393099773917,-122.51028543460575],[37.77133492820008,-122.51102592850947],[37.7747179408414,-122.45466142100423]]", ride_name: "Through the Park", elevation_gain: 672, distance: 7.0, ride_description: "Saw some buffalo!", duration: 5133, calories_burned: 294, start_pos: "37.7747179408414,-122.45466142100423", rider: "Dan"},
  {user_id: 18, ride_path: "[[37.80517619043526,-122.43249586928744],[37.83637320123609,-122.48342543278335],[37.806704789830405,-122.47460285314651],[37.80502175389604,-122.43272043357229]]", ride_name: "Bridge and Back", elevation_gain: 1250, distance: 10.0, ride_description: "What a ride!", duration: 7822, calories_burned: 440, start_pos: "37.80502175389604,-122.43272043357229", rider: "Haley"},
  {user_id: 23, ride_path: "[[37.79173263657549,-122.39306352960142],[37.78461615243539,-122.42109307161707]]", ride_name: "Commute", elevation_gain: 52, distance: 2.0, ride_description: "Morning ride to App Academy", duration: 2002, calories_burned: 81, start_pos: "37.78461615243539,-122.42109307161707", rider: "Kabir"},
  {user_id: 24, ride_path: "[[37.59480596441733,-122.50471523764503],[37.752250425042114,-122.50838110421716]]", ride_name: "Down the Coast", elevation_gain: 1112, distance: 13.0, ride_description: "That first hill is brutal!", duration: 4874, calories_burned: 534, start_pos: "37.752250425042114,-122.50838110421716", rider: "Tony"},
  {user_id: 25, ride_path: "[[37.73091953393059,-122.4977317059861],[37.72650759514771,-122.48329053799341],[37.70825298780521,-122.48641378383707],[37.71704934553942,-122.4990102777167],[37.7314206409491,-122.49861798775135]]", ride_name: "Lake Merced", elevation_gain: 302, distance: 5.0, ride_description: "Crushed it", duration: 9860, calories_burned: 228, start_pos: "37.7314206409491,-122.49861798775135", rider: "Steven"},
  {user_id: 22, ride_path: "[[37.75810147066164,-122.42782513702502],[37.74944793682679,-122.41143919102336],[37.765016065934006,-122.41751021041364]]", ride_name: "Around the Mission", elevation_gain: 141, distance: 2.0, ride_description: "Finished at Dolores Park!", duration: 2003, calories_burned: 118, start_pos: "37.765016065934006,-122.41751021041364", rider: "Dan"},
  {user_id: 18, ride_path: "[[37.72916057164467,-122.47465716117074],[37.738331211214806,-122.465819162824],[37.743978986102,-122.45249803182867],[37.75050867057988,-122.44315074864022],[37.763255339710675,-122.43302444025403],[37.73013163274816,-122.47485848822924]]", ride_name: "Big Climbs", elevation_gain: 1141, distance: 10.0, ride_description: "Got super tough near the five mile mark!", duration: 7822, calories_burned: 426, start_pos: "37.73013163274816,-122.47485848822924", rider: "Haley"},
  {user_id: 21, ride_path: "[[37.687334843811016,-122.39039038877718],[37.790863192439915,-122.38983385934716],[37.803320250218285,-122.4496335052329],[37.77887246366446,-122.509374161084],[37.7370509227626,-122.50562635170098],[37.68993494097244,-122.39193391582313]]", ride_name: "City Limits", elevation_gain: 1351, distance: 31.0, ride_description: "I rode around the entire city!", duration: 19271, calories_burned: 1250, start_pos: "37.68993494097244,-122.39193391582313", rider: "Hannah"},
  {user_id: 20, ride_path: "[[37.78994043567849,-122.38872968483855],[37.80870408004802,-122.41518217831532]]", ride_name: "Embarcadero", elevation_gain: 30, distance: 2.0, ride_description: "I love San Francisco!", duration: 1282, calories_burned: 88, start_pos: "37.80870408004802,-122.41518217831532", rider: "Kathe"},
  {user_id: 18, ride_path: "[[37.77951026126518,-122.3887666500454],[37.80302022301729,-122.433747071131]]", ride_name: "Giants Game!", elevation_gain: 102, distance: 4.0, ride_description: "Getting to the game is so easy. I love biking along the Embarcadero!", duration: 3022, calories_burned: 172, start_pos: "37.80302022301729,-122.433747071131", rider: "Haley"},
  {user_id: 22, ride_path: "[[37.77504539844035,-122.4709501807086],[37.944421047853304,-122.50973144776827]]", ride_name: "Marin to SF", elevation_gain: 1351, distance: 15.0, ride_description: "Easy peasy", duration: 7811, calories_burned: 617, start_pos: "37.944421047853304,-122.50973144776827", rider: "Dan"}
])
User.create!([
  {username: "Kathe", password_digest: "$2a$10$GBK6ul1Ut6/tVhKtBN4FTehWXg6O/DxPTMr8WagTzxqXwFwoK/3S6", session_token: "V6MMUbHI8v8whFJNuvZhkA"},
  {username: "Kabir", password_digest: "$2a$10$w.32q5bVIcvlmz85ki3WY.CPgt7uc.QMYGOfFNujq5qeKyE5N8XtG", session_token: "R3ClEG9tWP5rdyPF0rSHWw"},
  {username: "Brian", password_digest: "$2a$10$thqZrZLuVSHkke9KZPfsZOSVdVek4HI7PlIgU0Ww/DvPwTfaZmJR6", session_token: "OlDW24HQQeQ-nme29jOXeA"},
  {username: "Tony", password_digest: "$2a$10$5oahrLYrmQTYTzXhfl9StOzf9jFaKBZirMeTdL6jp05FhN4s7eIqi", session_token: "mlUrCn1HsUiTxEBPW7SgEw"},
  {username: "Dan", password_digest: "$2a$10$2qX2BVJTWx68I0V7A2g1..CCol./QRbP.ey0vPpMKXyDtcW4.oi1C", session_token: "f-7V-ai9L13eSvHz0c9QXw"},
  {username: "Steven", password_digest: "$2a$10$x5YUtf.AcQ7ytj9k1PIVuOKFGSxkatE5JGs1/SryAjHc1BHBiyw3S", session_token: "5puIS1dAjfQaE7dR3YEBhA"},
  {username: "Haley", password_digest: "$2a$10$Rc2GqPnQTtGSzD.bjJbtTOeDz/R1TxEs0IkdAMa44BVxo.qT7byrm", session_token: "NMiMOa7Km60fSoN4qrXsfw"},
  {username: "Hannah", password_digest: "$2a$10$dTyCO8jb5gEq.faoobZ1Busz4IYRMC7DgaoKl5wxKLI2j3dQ2uFQ2", session_token: "nA4IBtNHocbZQ4eyHIDuHw"}
])
