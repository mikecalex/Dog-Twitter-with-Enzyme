import Tweet from '../../src/components/Tweet';

describe('Tweet', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Tweet
        text="Welcome to the Machine"
        name="Pink Floyd"
        userPhoto="http://fakeurl.com/elephant"
      />
    )
  })

  it('should render an img tag with the specific prop', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://fakeurl.com/elephant',
    });
  });

  it('should render an p tag with the text property value', () => {
    expect(wrapper.find('p').text()).toBe('Welcome to the Machine');
  });

  it('should render an span tag with the name property value', () => {
    expect(wrapper.find('span').text()).toBe('Pink Floyd');
  });
})
