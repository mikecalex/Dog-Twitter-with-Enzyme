import TwitterFeed from '../../src/containers/TwitterFeed';
import Tweet from '../../src/components/Tweet';

describe('TwitterFeed', () => {
  let wrapper;
  let data = [{
    id: 1,
    text: "This doesn't look like Kansas",
    user: {
       name: 'Todo',
       profile_image_url: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    }
  }]

  beforeEach(() => {
    wrapper = mount(
      <TwitterFeed
        data={data}
      />
    )
  });

  //YOUR TEST CODE HERE
  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ selectedTweetId: null });
  });

  it('should render an Tweet Component', () => {
    expect(wrapper.find(Tweet)).toBePresent();
  });

  it('should render the Tweet Component with specific props when selectedTweetId is null', () => {
    wrapper.setState({ selectedTweetId: 1 })
    expect(wrapper.find(Tweet).props()).toEqual({
      id: 1,
      text: "This doesn't look like Kansas",
      name: "Todo",
      userPhoto: "http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg",
      handleClick: jasmine.any(Function),
      className: 'selected'
    });
  });

  it('should render the tree of the Tweet component', () => {
    let pageText = wrapper.text();
    expect(pageText).toMatch("This doesn't look like Kansas")
  });
})
