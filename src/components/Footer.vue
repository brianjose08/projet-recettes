<template>
  <div id="footer">
    <div>
      <h3>General Informations</h3>
      <p>
        Morbi varius lectus arcu. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Etiam in augue eget massa ornare consequat. In a eros
        at justo feugiat molestie eget id eros. urabitur non ante tellus.
        Phasellus nibh dolor, imperdiet eget accumsan nec.
      </p>
    </div>
    <div>
      <ul class="social-icons">
        <li>
          <a class="facebook" href="https://facebook.com/" target="_blank">
            <img
              src="https://www.transparentpng.com/thumb/facebook-logo-png/image-black-facebook-logo-png-26.png"
              width="40"
              height="40"
            />
          </a>
        </li>
        <li>
          <a class="twitter" href="https://www.twitter.com/" target="_blank">
            <img
              src="https://www.pinclipart.com/picdir/big/126-1262955_twitter-clipart-transparent-background-black-twitter-logo-transparent.png"
              width="30"
              height="25"
            />
          </a>
        </li>
        <li>
          <a
            class="instagram"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <img
              src="https://www.transparentpng.com/thumb/logo-instagram/zI6ZGS-black-logo-instagram-png-transparent.png"
              width="30"
              height="30"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
#footer {
  margin-top: 100px;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 210px;
  background: #1f1e1ef5;
  font-family: "Architects Daughter", cursive;
}
#footer h3 {
  margin-top: 2%;
  color: #ffffff;
  font-size: 25px;
  font-weight: 1200;
  text-decoration: underline;
}
#footer p {
  color: #ffffff;
  width: 500px;
  text-align: left;
}

.facebook img {
  position: relative;
  top: 5px;
}
.twitter img {
  position: relative;
  top: 12px;
}
.instagram img {
  position: relative;
  top: 10px;
}
.social-icons {
  padding-left: 50px;
}
.social-icons li {
  display: block;
  margin-bottom: 5px;
}
.social-icons a {
  background-color: #eceeef;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 30px;
  width: 30px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.twitter:hover {
  background-color: #00aced;
}
.social-icons a.instagram:hover {
  background-color: #ff00c8;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>
