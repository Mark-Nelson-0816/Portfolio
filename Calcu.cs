class Calculator
{
    private int fNum, sNum;

    public Calculator(int fNum, int sNum)
    {
        this.fNum = fNum;
        this.sNum = sNum;
    }
    public void setFNum(int fNum)
    {
        this.fNum = fNum;
    }
    public void setSNum(int SNum)
    {
        this.sNum = sNum;
    }
    public int getFNum()
    {
        return fNum;
    }
    public int getSNum()
    {
        return sNum;
    }

    public int getSum()
    {
        return getFNum() + getSNum();
    }
    public int getDifference()
    {
        return getFNum() - getSNum();
    }
    public int getProduct()
    {
        return getFNum() * getSNum();
    }
    public int getQuotient()
    {
        return getFNum() / getSNum();
    }
}