import Collaps from "../components/Collaps";
const About = () => {
    return(
        <div className="pt-24 pb-5 px-6 md:px-24 min-h-screen bg-[#181818]">
            <h1 className="text-3xl font-bold text-white">About This Site</h1>
            <p className="py-5 text-md text-white">
                This site is a prototype created to give restaurant-goers a quick and easy way to find black-owned restaurants to dine at.
                <br/><br/>
                Compared to a static list of restaurants, this website uses the Google Places API to dynamically find restaurants for any given location.
            </p>
            <Collaps
                title={"Race and Restaurants"}
                text={
                    <>
                        Since May of 2020, the large amount of Black Lives Matter protests have sprung discussions across the world about racial justice. Many have come to realize that racial justice exists everywhere in the US, even in the restaurant industry, affecting both servers and diners. (Allen) People began to look for ways to support those affected by racial injustices, with one of the methods being to spend money at black-owned businesses. There were more than 2,500,000 searches online for black-owned restaurants at one point, but these numbers have subsided since. (Kang)
                        <br/><br/>
                        Especially as a result of COVID and lockdowns, many black entrepreneurs and business owners have been disproportionately affected, with some black-owned businesses having revenue fall between 70% and 80%. (de León) While there has been a spike in interest by non-black communities, there is a need for long-term support for black-owned restaurants. As food is a core aspect of black culture, supporting these businesses financially has a cultural lens to it. (“How You Can”)
                        <br/><br/>
                        Recently, there has been a wave of tech companies supporting black-owned businesses and being actively anti-racist. Delivery companies such as Uber and DoorDash have marked black-owned restaurants on their app, and restaurant search platform Yelp marks restaurants that have been accused of racist behavior. (“Black History Month”; Malik) 
                    </>
                }
            />
            <Collaps
                title={"Why this site is important"}
                text={
                    <>
                         I decided to create this website after seeing the issues surrounding race and restaurants. We, as consumers, have a lot of power in deciding what businesses to support. By speaking with our dollars and deciding to dine at a local restaurant rather than a McDonald’s, we can support our community.
                        <br/><br/>
                        With a more narrow approach, this website seeks to give consumers the ability to find black owned restaurants around them to eat at. Compared to a static list one can find on many websites online, this platform gives users the chance to find black-owned restaurants alongside opening hours, reviews, and other related information. 
                        <br/><br/>
                        Even as traditional restaurant search websites such as Yelp begin to add socially aware tags to restaurants, these aren’t core features of their website. (Amick) As a result, there remains a need for restaurant search websites that allows users to filter through social causes.
                    </>
                }
            />
            <Collaps
                title={"Design Analysis"}
                text={
                    <>
                        To inform the design decisions for my own site, I chose to look at the original restaurant search website: Yelp. I’ll specifically look at the mobile site as I chose to use a mobile-first approach when building this site, honing in on usability through design.
                        <br/><br/>
                        Yelp’s white and red color scheme makes it an iconic remnant of early 2010s web design: sharp angles, a large navbar, and large amounts of information on the screen compared to modern designs we see today. Upon searching for a location, a list of restaurants will show up. It isn’t immediately obvious if you can click on the title of each establishment since each restaurant is separated by horizontal borders and the title isn’t underlined, but we do anyways as our brains are wired to do so.
                        <br/><br/>
                        Furthermore, a review is featured even before looking at a location in more detail, giving the user a sense of what they may expect to find if they do end up choosing that restaurant. When a user clicks into a restaurant, they are greeted with a flurry of images, a horizontally scrolling display of menu items, and an unseparated list of reviews that you can interact with. 
                        <br/><br/>
                        While the design is old-fashioned and cluttered by our standards, all the information I need is there when I look for it, making it a good starting point for my own design. I like the intuitive flow of the site: location → restaurant list → restaurant, but hope to add a bit more of a modern spin on it.
                    </>
                }
            />
            <Collaps
                title={"Design Implementation"}
                text={
                    <>
                        I’ll break up the design for this site into 4 main components: the home page, the search bar, the restaurant list, and the restaurant page. My goal was to improve on the usability of Yelp and try to highlight each restaurant as the primary focus of the site, rather than the reviews. I chose to use a lot of white, gray, and black rather than primary colors as I wanted to put the focus on the black-owned restaurants’ details instead of having distracting colors.
                        <br/><br/>
                        I try to do this on the home page by using large, full-size images that lead to a restaurant page. I hope that by directing the user to click on a clear button instead of having a cluttered home page, I’m able to place more emphasis on the image and the emotions it conveys to the user.
                        <br/><br/>
                        The search bar is integrated as part of the site, allowing users to search for locations no matter what page they are on. The fading animations feel less static, with the rounded search bar morphing into a full-size one that takes up the whole screen width. The autocomplete function also allows the user to find the location they need as they type, which also adds to the dynamism of the site.
                        <br/><br/>
                        The restaurant list uses a card format, and all have shadows and borders that indicate clickability. It features quick information about the restaurant, including name, location, star rating and a photo. Clicking into a restaurant gives more pictures, opening hours, their website, address, phone number, and reviews. The opening hours and reviews are closed on default, as they are long and add a lot of clutter.
                    </>
                }
            />
            <Collaps
                title={"Moving Forwards"}
                text={
                    <>
                        The site is far from perfect and only serves as a proof of concept for a platform that enables users to find black-owned restaurants. One common sentiment I saw throughout my research is that we can always take it one step further to help those who are discriminated against. In addition to reading a list of black-owned restaurants, we can dine there, understand their story, and be a part of a local community that puts people before profits. (Saxena)
                        <br/><br/>
                        While I try to use the site to put these businesses in the spotlight, it does little to tell their individual stories. Even if the Google APIs I used did not tell the story of how each restaurant came to be, I hope for more tech platforms to give a voice to restaurants owned by underserved communities. There is a large tech barrier for this, and only the more well-off restaurants may have the resources to spread their brand through the internet. That being said, I am hopeful that technology will help bridge the existing racial gap in the restaurant industry.
                    </>
                }
            />
        </div>
    )
}
export default About;
